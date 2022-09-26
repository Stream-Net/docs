---
sidebar_position: 3
---

# Consumer
### Configuring application startup
At Startup.cs or Program.cs(in case of .net 6 or later), add the following lines:
``` cs 
builder.Services.AddTransient<IUseCaseTestImplementation, UseCaseTestImplementation>();
builder.Services.AddHostedService<MessageSampleEventConsumer>();
```

``` cs
[ConsumerGroup("consumerGroupId")] //Required
[TopicName("your.topic.name")] //Optional
public class MessageSampleEventConsumer : Consumer<MessageSampleEvent>
{
    private readonly IUseCaseTestImplementation _useCase;

    public MessageSampleEventConsumer(IUseCaseTestImplementation useCase, ILogger<TestConsumer> logger) : base(logger)
    {
        _useCase = useCase;
    }

    protected override async Task HandleAsync()
    {
        await _useCase.ExecuteAsync(Message);
        return;
    }
}
```
Required Attributes:
- ConsumerGroup: a subscriber to one or more Kafka topics

Optional Parameters:
- TopicName: The name for your topic. If you don't specify, your consumer will subscribe a topic with the following pattern:
```
Your.Namespace.Concatenated.With.Your.Event.Contract
```

Parameters: 
- logger: the instance of ILogger to log the consumed messages and give some data to client.


### Dead-letter
How the dead-letter functionality works:
If your consumer throws an exception, it will be automatically redirected to a new topic, with the folling name:
YourMessageType_dead_letter.

It accepts any dependency injection parameter you'll need to use.
