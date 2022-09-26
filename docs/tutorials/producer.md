---
sidebar_position: 2
---

# Producer

## Configuring application startup
At Startup.cs or Program.cs(in case of .net 6 or later), add the following line:
```csharp 
builder.Services.AddProducer();
```
## Using a producer through dependency Injection
Just inject the IPublisher interface, and send message of any type in ProduceAsync() method.
You can also, use the optional parameter **topicName** to specify a topic name. 
By default, the topic will be created with the following pattern: 
```
Your.Namespace.Concatenated.With.Your.Event.Contract
```
```cs 
public class UseCaseTestImplementation : IUseCaseTestImplementation
{
    private readonly IPublisher _publisher;

    public UseCaseTestImplementation(IPublisher publisher)
    {
        _publisher = publisher;
    }
    public async Task ExecuteAsync(MessageSampleEvent message)
    {
        await _publisher.ProduceAsync(message, "your.topic.name");
    }
}

public interface IUseCaseTestImplementation
{
    Task ExecuteAsync(MessageSampleEvent message);
}
```
