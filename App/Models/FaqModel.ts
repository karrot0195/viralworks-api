import { Injectable } from 'System/Injectable';
import { Mongo } from 'System/Mongo';
import { BaseModel } from 'System/BaseModel';
import { Faq } from 'Database/Schema/FaqSchema';

enum StatusFaq {
    Trash = -1,
    Pending = 0,
    Publish = 1
}

export enum TypeFaq {
    Influencer = 0,
    Brand = 1,
    KOLUser = 2
}


export interface IFaq {
    readonly question: string;
    readonly answer: string;
    readonly type: number;
    status: number;
}

@Injectable
export class FaqModel extends BaseModel<IFaq, Faq> {
    constructor(_mongo: Mongo) {
        super(_mongo, 'faq');
    }

    createFaq(data: IFaq) {
        data.status = StatusFaq.Publish;
        return this.create(data);
    }

    findAll(email: String) {
        return this._model.findOne({ email });
    }
}