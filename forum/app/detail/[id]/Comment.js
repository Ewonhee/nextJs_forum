'use client'

import React, { useEffect, useState } from 'react'

const Comment = (props) => {

    // console.log(props.cid)
    
    let [ comment, setComment] = useState('')
    let [data, setDate] = useState([])
    

    useEffect(()=>{

      fetchComments()

    },[])

    const fetchComments = () =>{
      fetch('/api/comment/list?id=' + props.cid)
      .then(r=>r.json())
      .then(result=>{
        console.log(result)
        setDate(result)
      })
    }



    // useEffect(()=>{
    //   fetch('/api/comment/list?id=' + props.cid).then(r=>r.json()).then((result)=>{
    //     console.log(result)
    //     setDate(result)
    //   })
    // },[]) 
    // 코드보관함, html 보여준후에 늦게 실행시작
    // result에서 바로 html 로 전달 못함 state에 돌려서 해야함


  return (
    <div>
        <div>댓글목록보여줄부분</div>
        {
          data.length > 0 ?
          data.map((a,i)=>{
            return(
              <p key={i}> {a.content}</p>
            )
          })
          :'댓글없음'
        }
        <input onChange={(e)=>{setComment(e.target.value)}}/>
        <button onClick={()=>{
            
            fetch('/api/comment/new', {
              method: 'POST',
              body: JSON.stringify({comment: comment, _id: props.cid})
            })
            .then(()=>{
              fetchComments()
            })
           
            
        }}>댓글전송</button>
    </div>
  )
}

export default Comment