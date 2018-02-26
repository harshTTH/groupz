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
		   }).then((res)=> res.data.user),

			 confirm:(token)=>axios({
				 method:'post',
				 url:'/api/auth/confirmation',
				 data : {token}
			 }).then((res)=>res.data.user),

			 resend:(token)=>axios({
				 method:'post',
				 url:'/api/resend',
				 data:{token}
			 }).then(res=>res.data.status)
     }
}
