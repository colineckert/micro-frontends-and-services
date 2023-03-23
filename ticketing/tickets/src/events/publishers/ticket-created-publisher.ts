import { Publisher, Subjects, TicketCreatedEvent } from '@ce-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
