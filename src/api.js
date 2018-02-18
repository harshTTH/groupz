import axios from 'axios';

export default {
	user:{
		login:(credentials)=>axios({
	        method: 'post',
	        url:'/api/auth',
	        data:{credentials},
	      })
      	.then(res=> res.data.user),
		signup:(user)=> axios({
           method: 'post',
           url   : '/api/signup',
           data  : {user},
	   }).then((res)=> res.data.user)
     }
}
