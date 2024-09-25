import { useState } from "react";

function User(props) {
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.age}</td>
            <td>{props.item.gender}</td>
            <td>{props.item.phone}</td>
        </tr>
    );
}

function MyInput(props) {
    const changeInputValue = (e) => {
        const value = e.target.value;
        props.setData(value);
    }

    return (
        <input type={props.type}
               placeholder={props.placeholder}
               value={props.data}
               onChange={changeInputValue} />
    )
}

function UserList() {
    const [list, setList] = useState([
        {
            name: '최재영',
            age: 30,
            gender: '남자',
            phone: '010-8393-3646'
        },
        {
            name: '카리나',
            age: 20,
            gender: '여자',
            phone: '010-0000-0000'
        },
        {
            name: '윈터',
            age: 20,
            gender: '여자',
            phone: '010-1111-1111'
        }
    ]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');

    const registUser = () => {
        const newUser = {name: name, age: age, gender: gender, phone: phone};

        list.push(newUser);

        setList([...list]); // 전개 연산자 : 새로운 배열 복사
        
        setName('');
        setAge('');
        setGender('');
        setPhone('');
    }

    return (
        <div>
            <h1>회원 정보 출력</h1>

            <hr></hr>

            <div>
                <h3>회원 정보 등록</h3>
                <hr></hr>

                <MyInput type='text' placeholder='이름' data={name} setData={setName}/>
                <MyInput type='text' placeholder='나이' data={age} setData={setAge}/>
                <MyInput type='text' placeholder='성별' data={gender} setData={setGender}/>
                <MyInput type='text' placeholder='연락처' data={phone} setData={setPhone}/>
                <button onClick={registUser}>등록</button> 
                {/* <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="나이" value={age} onChange={(e) => setAge(e.target.value)}/>
                <input type="text" placeholder="성별" value={gender} onChange={(e) => setGender(e.target.value)}/>
                <input type="text" placeholder="연락처" value={phone} onChange={(e) => setPhone(e.target.value)}/>*/}
                {/* <button onClick={() => setList([...list, {name: name, age: age, gender: gender, phone: phone}])}>등록</button>  */}
            </div>

            <hr></hr>

            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>성별</th>
                        <th>연락처</th>
                    </tr>
                </thead>

                <tbody>
                    {list.map((item, index) => {
                        return (
                            <User key={'user'+index} item={item} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;