import { Divider, Input } from 'antd';

const Search  = props => {
    return ( 
        <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={() => {}} placeholder='Enter search food query'/>
    </>
    );
}
 
export default Search ;