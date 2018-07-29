# AOP(Aspect Oriented Programming)   

Programming technique based on concept of an Aspect    

Aspect encapsulates cross-cutting concern(a concern is a logic or functionalities). For example, a crossing cutting concern is a basic infrastructure code that all applications will need(like logging, security)    


**An aspect ia a class**
**Aspect can be applied at different parts of the project**
**A Single Application can have any number of Aspects**


```
@Aspect 
public class
LoggingAspect{
	...
}

@Aspect
public class
Security Aspect{
	...
}
```   



