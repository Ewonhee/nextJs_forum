'use client'
// client 컴포넌트를 설정할때 기본적으로 큰페이지를 서버로 두고 분리해서 한다.
// 검색 노출에 어려움 
// 그래서 검색엔진에 친환경 적인 props를 사용

import React, { useEffect } from 'react'
import Link from 'next/link'

const Listltem = ( props) => {

    // useEffect(()=>{
    //     서버에 부탁해서 DB게시물 가져옴
    //     result = DB게시물
    // },[]) ==> 이 방법은 html이 먼저 실해하고 실행되기 떄문에 검색노출에 단점이 생긴다.

    

    

  return (
    <div>
        {
        props.result.map((data,i)=>{

            const postId = props.result[i]._id;
            // 계정
            
            
            return(
                <div className="list-bg" key={i}>
                    <div className="list-item">
                        <h4>
                            <Link href={'/detail/'+props.result[i]._id}>{data.title}</Link>
                        </h4>
                        {/* <DetailLink/> */}
                        <Link href={'/edit/'+ props.result[i]._id}>✏️</Link>
                        {/* form 또는 Ajax(cilent 안에서만 사용가능) 사용 */}
                        <span onClick={(e)=>{
                            console.log(postId)
                            fetch('/api/post/delete',{method: 'DELETE', body: postId})
                            .then(()=>{
                              e.target.parentElement.style.opacity = 0;
                              setTimeout(()=>{
                                e.target.parentElement.style.display = 'none'
                              },10)

                            })

                        }}>🗑️</span>
                        <p>1월 {i}일 </p>
                    </div>
                </div>
            )

        })
    }
    </div>
  )
}

// fetch('/api/test',{
                            //     method: 'POST',
                            //     body: JSON.stringify([1,2,3])
                            // }).then(()=>{
                            //     console.log(12314) .then()은 요청완료시 코드실행, fetch은 get요청이 된다.
                            // })


export default Listltem