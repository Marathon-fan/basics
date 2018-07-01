# basics

Smoke Testing    
The term ‘smoke testing’, it is said, came to software testing from a similar type of hardware testing, in which the device passed the test if it did not catch fire (or smoked) the first time it was turned on.

## SMOKE TESTING Fundamentals DEFINITION

- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Smoke Testing, also known as “Build Verification Testing”, is a type of software testing that comprises of a non-exhaustive set of tests that aim at ensuring that the most important functions work. The results of this testing is used to decide if a build is stable enough to proceed with further testing. represents red`

## ELABORATION

Smoke testing covers most of the major functions of the software but none of them in depth. The result of this test is used to decide whether to proceed with further testing. If the smoke test passes, go ahead with further testing. If it fails, halt further tests and ask for a new build with the required fixes. If an application is badly broken, detailed testing might be a waste of time and effort.

Smoke test helps in exposing integration and major problems early in the cycle. It can be conducted on both newly created software and enhanced software. Smoke test is performed manually or with the help of automation tools/scripts. If builds are prepared frequently, it is best to automate smoke testing.

As and when an application becomes mature, with addition of more functionalities etc, the smoke test needs to be made more expansive. Sometimes, it takes just one incorrect character in the code to render an entire application useless.

## ADVANTAGES

It exposes integration issues.   
It uncovers problems early.   
It provides some level of confidence that changes to the software have not adversely affected major areas (the areas covered by smoke testing, of course)   

## LEVELS APPLICABLE TO   

<pre>
Smoke testing is normally used in <b>Integration Testing, System Testing and Acceptance Testing</b> levels.
</pre>
