import { Input, Wrapper } from "./MovieSearch.styled";

export const MovieSearch = ({ value, onSearch }) => {
  const handleChange = e => {
    onSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Find film"
          value={value}
          onChange={handleChange}
        />
        {/* <button type="submit">Search</button> */}
      </form>
    </Wrapper>
  );
};