import axios from 'axios';

export default {
	user:{
		login:(credentials)=>axios({
	        method: 'post',
	        url:'/api/auth',
	        data:{credentials},
	      })
      	.then(res=> res.data.user),
		signup:(credentials)=> axios({
           method: 'post',
           url   : '/api/signup',
           data  : {credentials},
	   }).then((res)=> res.data.user)

      }
}
