import {getUser} from "../utils/AuthUtils";

const BASE_URL = "https://caryophy.online/api";

async function httpRequest(method, url, data, customHeaders = {}) {
    const headers = {
        "Content-Type": "application/json",
        ...customHeaders
    };

    const token = getUser()?.token;
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    let fullUrl = url.startsWith("http") ? url : BASE_URL + url;

    let options = {
        method,
        headers
    };

    if (data !== undefined && method !== "GET" && method !== "HEAD") {
        options.body = JSON.stringify(data);
    }

    const resp = await fetch(fullUrl, options);
    const text = await resp.text();
    let json;
    try {
        json = text ? JSON.parse(text) : {};
    } catch (e) {
        json = text;
    }
    if (!resp.ok) {
        throw { status: resp.status, data: json, message: resp.statusText };
    }
    return json;
}

export const httpClient = {
    get:  (url, headers) => httpRequest("GET", url, undefined, headers),
    post: (url, data, headers) => httpRequest("POST", url, data, headers),
    put:  (url, data, headers) => httpRequest("PUT", url, data, headers),
    delete: (url, headers) => httpRequest("DELETE", url, undefined, headers)
};
