import axios from "axios";

const useAstrologerData = async() => {
    const result = await axios.get('http://192.168.0.104/api/get-astros');
    return result.data;

}

export default useAstrologerData;