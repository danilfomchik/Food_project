const postData = async (url, data) => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: data
    });

    console.log('result-->', result);

    return await result.json();
};

const getResource = async (url) => {
    const result = await fetch(url);
    
    if(!result.ok){
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
};

export { postData, getResource };