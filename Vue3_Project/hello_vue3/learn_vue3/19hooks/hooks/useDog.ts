import {onMounted, reactive} from 'vue';
//axios 是一个用于发送 HTTP 请求的库
import axios  from 'axios';

//默认导出只能有一个，在导入时可以使用任意名称
export default function (){
    //数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])
    //方法
    async function getDog(){
        try{
            let result =await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        dogList.push(result.data.message)
        }catch(error){
            alert(error)
        }
    }
    //钩子
    //挂载完毕
    onMounted(()=>{
        getDog()
    })
    //给外部提供东西
    return {dogList,getDog}
}