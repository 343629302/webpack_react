import { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

function App() {

    /*
     * sate 表示数据
     * setState 表示修改数据的方法
     * useState(init)   init 表示初始化,只会在第一次生效.
     */

    const [state, setState] = useState((val) => {
        return 'hahhahaha';
    });

    useEffect(
        () => {
            //初次渲染和更新渲染的时候都会触发
            console.log(2);
        },
        //当含有第二个参数的时候只会在初次渲染的时候触发
        []
    );

    return (
        <>
            <div onClick={() => setState('77777')}>{state}</div>
        </>
    );
}

export default hot(App);
