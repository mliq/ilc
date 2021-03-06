import {
    Request,
    Response,
} from 'express';

import db from '../../db';
import preProcessResponse from '../../common/services/preProcessResponse';

const getApps = async (req: Request, res: Response): Promise<void> => {
    const apps = await db.select().from('apps');

    res.setHeader('Content-Range', apps.length); //Stub for future pagination capabilities
    res.status(200).send(preProcessResponse(apps));
};

export default [getApps];
