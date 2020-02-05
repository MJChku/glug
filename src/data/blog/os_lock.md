---
path: "/blog-demo"
date: 2020-01-28
title: "Introduction"
cover: "./os.jpg"
---
[*My recent work on locking in Os class*]

Summary of our approach in this lab;

We first start with simple spinlock(which works best on average) implemented with careful consideration (use atomic operation,etc.).
Later on integrated this spinlock into ring.c, it works fine on light workloads. We add interrupt_disable and enable whenever we 
acquires and release the lock, to have the minimum interference to interrupt signal. One thing we found interesting here is 
interrupt_disable/enable call affects performance a lot, barely call interrupt_disable/enable slows down our program by significant amount.

[*IMPROVEMENT*]

* To prevent too much busy waiting which means keep acquiring lock when thread can't get it. We call `pthread_yield()` after fails from 
trying acquire the lock, the thread will call `pthread_yield()`, and being put into least priority in running queue. This essentially makes thread try once and try again later. But evenif they try later, it doesn't mean they have large chance to get a lock. Anyhow, it boosted our performance.

* We add `pthread_yield()` after consult `can_push/pull`, if the shared queue is empty/full, no consumer/producer keep check can_pull/push. This 
increase our performance as well. 

The above is on branch `master`

***
In light of what we've done in first approach, we wanted a smart version of acquaire lock. We utilize `pthread_mutex_lock/unlock` and `pthread_cond_wait/signal`,
in the first attemp, we implement a queue(a list indeed) which operated slowly, to keep condition variable each thread is waiting on, and we
assign each thread a condtion variable. We later found this is very unwise, because condition variable is large and we don't need to maintain the information
at that granularity. It works as when consumer can't pull from shared resource, it's wait on a cond variable; when producer produce one, it 
wakesup a consumer by poping a condition variable from a queue. The same for producer. A mutex is being used to protect both access to shared resource and 
condition variable queue. It works poorly, but we had control over who wakes up at what senario.

The above is on branch `linked-list-version`.

[*IMPROVEMENT*]

* An improvement over this approach is use only one shared condition variable for consumer or producer (totally two), and `pthread_cond_signal` would only 
wake up one who is waiting on the variable, hence it wouldn't cause further contention, partially the reason we don't use `pthread_cond_broadcast`. This improvement
has nothing to do with the lock, rather specific to this producer/consumer problem. This approach is slow in single produce/consumer scenario.
on branch`mutex_cond_variable`

* Further improvement gaves up pthread_cond function, simply call `pthread_yield` when `can_push/pull` fails and keep pthread mutex. on branch `build_in_mutex`

Further more, we use branch `possible improve` to explore many idears including use of semaphore etc. We have found that we have no control over 
lift priority of threads, hence we implemented `raise priority` function to raise priority of thread whenever we see appropriate. This didn't improve performance 
by sensable amount.

***
We've done comprison among all our approaches mentioned above, and decided to use spinlock on master branch, largely due to it's good performance on single cpu,
single consumer/producer task, even though other approach has much better performance on multicore, multiconsumer/producer for some case. As I also mentioned,
the performance somehow depends on number of times program call interrup_disable/enable, we made effort to reduce the number it's being called but also aim to
keep minimum interference to interrupt process.

***

The spin-version is on the master branch. 

Here is the performance we achieved, from the test cases provided on Piazza for two different approach:

 _Duration_ :

|ID|command|Workloads|spinlock time/s|mutex time/s|
|:--:|:------|:-------:|:-----------:|:---------:|
|1|./harness 100 100 16 1000000|Many to Many| 6.9015|2.7516 |
|2|./harness 1 1 1 10000000|One to One |12.3885| 43.6955|
|3|./harness -p 1 -c 1 1 200 10 100000|One to Many |0.1418| 0.36409|
|4|./harness -i pc -t 10 2 4 16 10000000|Interrupter |12.2553|29.8829 |
|5|./harness -p 24 -c 24 24 24 1024 1000000|Halfsies |5.6278|2.722355 |

***
In this lab, we tried spinlock and built-in_mutex, it achieved fair results compared to what should be expected according Piazza.
We first implemented spinlock without dealing with interrupts. After testing interrupt-free version, we tackled the interrupt version by wrapping critical sections with interrupt_disable_save() and interrupt_enable_restore() functions. These two functions seem to cost much of execution time.

We also have another branch, mutex_cond_variable branch in parallel. We applied condition variables so that each thread will request and wait if competing with the same resources. However, the performance of this method is not ideal.

For [*Task 1*], the result of all the tests met the requirements. The spinlock just worked fine and we can tell from execution time that it is time efficient. Also in Task 2, the spinlock locked the critical sections while at runtime.

For [*Task 2*], the results also met the requirements. The race conditions were addressed except interrupts at early stage, when considering interrupts, the performance dropped.

For [*Task 3*], we applied the two functions in atomic.[ch] which deal with interrupts. Now the buffer will not be interrupted while in critical sections.

For [*Task 4*], Despite that calling interrupt disable and interrupt enable functions which are atomic and heavy-load caused a lot slowdown especially for task ID 2 and 4, on multicore/ or multi consumer/producer workloads, our mutex approach has better performance than spinlock. It's wiser on multicore platform that time wasted on trying acquire lock is minimized. The overhead comes with mutex approach is switch from/to block state, however if we had enough threads and cores, we would better utilize the computation power if we put threads to block state when they can't get the lock other than busy waiting. Theoretically, spinlock has better performance on multicore platform, indeed it is and especially after we add `pthread_yield` which utilize the cores to the best we could. Nevertheless, we need to have enough threads to keep cores busy with non-critical part. Though the critical path will eventually be a bottleneck when we had enough cores, the producer and consumer threads are trying their best to work to force the ring buffer busy addressing the access requests from producers and consumers all the time, and in our implementation it already has.

For [*extra credits*], 
we have multiple approach to make an interesting comparison. 
