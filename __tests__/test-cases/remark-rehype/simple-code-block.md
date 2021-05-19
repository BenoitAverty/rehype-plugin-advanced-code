```
class MyTestClass extends RestController {

  public static final String ENDPOINT = "/api/test";
  
  public CustomDto getData() {
    return new CustomDto("hello", "world");
  }
}
```