import { getCollection, type CollectionEntry } from 'astro:content';

type Params = {
  limit?: number;
};

type EventEntry = CollectionEntry<'events'>;
export async function getEventCollection({ limit = undefined }: Params = {}) {
  const events = (await getCollection('events')).sort(latest);

  if (limit) {
    return events.slice(0, limit);
  }

  return events;
}

const latest = (post1: EventEntry, post2: EventEntry) =>
  (post2.data.date?.valueOf() ?? 0) - (post1.data.date?.valueOf() ?? 0);
