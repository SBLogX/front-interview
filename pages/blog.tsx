import { Fragment } from 'react'
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index: NextPage<{ data }> = (data) => {
  const styleContent = {
    display: 'flex',
    marginTop: '20px'
  }
  const inputStyle = {
    height: '20px',
    width: '80%',
    marginButtom: '20px'
  }
  const newData = Object.entries(data)
  return (
    <Layout>
        <Fragment>
        <div>
        <h1>set article title here</h1>
        <input
            type="text"
            name="userName"
            placeholder="Article title"
            style={inputStyle}
            onChange={(e) => this.changeText(e)}
        />
        </div>
        {
        newData.map(element => (
            <div style={styleContent}>
            <div>{element[1].date}</div>
            <img height="100" width="100" src={`https://upply-interview.herokuapp.com/images/${element[1].src}`} />
            <div>{element[1].title}</div>
            <div>{element[1].text}</div>
            </div>
        ))}
        </Fragment>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('https://upply-interview.herokuapp.com/');
  const data = await res.json();
  return data
}

export default Index;