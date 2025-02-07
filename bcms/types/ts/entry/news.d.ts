import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { PropRichTextDataParsed } from '@thebcms/types';

export interface NewsEntryMetaItem {
    title: string;
    slug: string;
    body: PropRichTextDataParsed;
}

export interface NewsEntryMeta {
    en?: NewsEntryMetaItem;
}

export interface NewsEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: NewsEntryMeta;
    content: BCMSEntryContentParsed;
}