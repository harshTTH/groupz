import axios from 'axios';

export default {
	user:{
		login:(credentials)=>axios({
	        method: 'post',
	        url:'/api/auth',
	        data:{credentials},
	      })
      	.then(res=> res.data.user).catch((err)=>console.log(err))
      }
}
