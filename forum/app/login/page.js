export default function Write(){
    return(
        <div className="p-20">
            <h4>회원가입</h4>
            <form action='/api/login/join' method="POST">
                <input name = 'ID' placeholder="아이디"/>
                <input name = 'Password' placeholder="비번"/>
                <button type='submit'>버튼</button>
            </form>
        </div>
    )
}