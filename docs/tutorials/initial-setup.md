---
sidebar_position: 1
---

# Initial setup
In your ASP.Net Core app, install the nuget package in [nuget.org](https://www.nuget.org/packages/StreamNet/)
and add the following configurations:

### appsettings.json
``` json
"Kafka": {
    "BootstrapServers": "localhost:9092",
    "SaslMechanism": "Plain",
    "SecurityProtocol": "SaslPlaintext",
    "Username": "your_user",
    "Password": "your_password",
    "RetryCount": 3,
    "TimeToRetryInSeconds" : 1
}
```
### appsettings configuration fields

1. **BootstrapServers**: server where your kafka is running, with the port.
2. **SaslMechanism**: Authorization mechanism used on server-side, this field accepts the following values:
   1. "GssApi"
   2. "Plain"
   3. "ScramSha256"
   4. "ScramSha512"
   5. "OAuthBearer"
3. **SecurityProtocol**: The security protocol used to authorize your user at the kafka broker-side, this field accepts the following values:
   1. Plaintext
   2. Ssl
   3. SaslPlaintext
   4. SaslSsl
4. **Username**: your username.
5. **Pasword**: your password.
6. **RetryCount**: Number of retentatives your consumer will do, before sending the message o dead letter topic.
7. **TimeToRetryInSeconds**: The interval between retentatives for the consumer.
