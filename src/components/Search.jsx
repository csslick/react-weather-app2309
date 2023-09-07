
export default function Search(props) {
    // state 변수들 가져오기
    const 날씨요청 = props.날씨요청;
    const location = props.location;
    const setLocation = props.setLocation;
    
    return (
        <form onSubmit={날씨요청}>
            <div className="input-group">
                <input
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    required
                    type="text" />
                <button type='submit' className='btn'>검색</button>
            </div>
        </form>
    )
}
