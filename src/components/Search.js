import { Divider, Input } from 'antd';

const Search  = props => {
    return ( 
        <>
      <Divider>Search</Divider>

      
      <Input value={undefined} type="text" name='search' onChange={(e) => {props.findFood(e)}} placeholder='Enter search food query'/>
    </>
    );
}
 
export default Search ;