import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface CustomerEntryMetaItem {
    title: string;
    slug: string;
    name: string;
    email: string;
}

export interface CustomerEntryMeta {
    en?: CustomerEntryMetaItem;
}

export interface CustomerEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: CustomerEntryMeta;
    content: BCMSEntryContentParsed;
}