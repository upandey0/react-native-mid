interface Secret {
    MOBILE_BASE_URL : string;
    WEB_BASE_URL : string;
}

const  Config : Secret = {
    MOBILE_BASE_URL : 'http://192.168.0.104:8080',
    WEB_BASE_URL : 'http://localhost:8080'
}

export default Config;