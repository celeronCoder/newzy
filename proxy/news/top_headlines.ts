import RESPONSE_OBJECT from "../RESPONSE_OBJECT";
import newsAPI from "./axios";

async function getTopHeadlinesWithCountryCode(code: string) {
    let response : RESPONSE_OBJECT;

    await newsAPI.get(`/top-headlines?country=${code}`)
        .then(res => {
            if (res.data.status === 'ok') response = res;
        });

    console.log(response);
    return response;
}

export {
    getTopHeadlinesWithCountryCode
}
