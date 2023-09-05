import * as request from "~/untils/httpRequest";

export const video = async (type, page = 1) => {
    try {
        const res = await request.get("videos", {
            params: {
                type,
                page,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
