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
			 }).then(res=>res.data.status),

			 forgotPass:(email)=>axios({
				 method:'post',
				 url:'/api/auth/forgotpass',
				 data:{email}
			 }),

			 verifyLink:(token)=>axios({
				 method:'post',
				 url:'/api/auth/verifylink',
				 data:{token}
			 }),

			 resetPassReq:(token,pass)=>axios({
				 method:'post',
				 url:'/api/auth/resetpassreq',
				 data:{token,pass}
			 }),
     },
		 members:{
			 fetchUsers:(email)=>axios({
				 method:'post',
				 url:'api/members/fetch',
				 data:{email}
			 }).then((res)=>res.data.users)
		 }
}
