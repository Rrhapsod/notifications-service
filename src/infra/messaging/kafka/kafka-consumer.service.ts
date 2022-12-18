import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['supreme-crappie-13899-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c3VwcmVtZS1jcmFwcGllLTEzODk5JAQOr01T-tss9lyCPxHKgZg0dD9ccsfxuzU',
          password:
            'lsi8j9GrgMPw_3ZkuGQZlYhlmLeBgtGq_pKJ17RrA_npkRCXKqQvqnIRR-vS3dZEhWH42g==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
