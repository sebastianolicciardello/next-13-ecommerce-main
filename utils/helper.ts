export const getURL = () => {
    let url =
        process?.env?.NEXT_PUBLIC_SITE_URL ?? // set this to your site URL in production env.
        process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // AUTOMATICALLY SET IN Vercel
        "http://localhost:3000";
        //make sure to include "https://" when not localhost
        url = url.includes("http") ? url : `https://${url}`;
        // make sure to including trailing "/"
        url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
        return url;
}