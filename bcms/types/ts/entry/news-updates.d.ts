import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { PropRichTextDataParsed } from '@thebcms/types';

export interface NewsUpdatesEntryMetaItem {
    title: string;
    slug: string;
    body: PropRichTextDataParsed;
}

export interface NewsUpdatesEntryMeta {
    en?: NewsUpdatesEntryMetaItem;
}

export interface NewsUpdatesEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: NewsUpdatesEntryMeta;
    content: BCMSEntryContentParsed;
}