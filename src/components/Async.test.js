import { render, screen } from '@testing-library/react';
import Async from './Async';

// Here we can use describe and test methods as usual, to test the results.

// describe('Async component', () => {
//   test('renders async posts', async () => {
//     render(<Async />);

// const listItems = screen.getAllByRole('listitem');

// getByRole() will expect listItems instantly after first render cycle, however we can't see those li as they are fetched from the server which take some time, so if the second render cycle starts then may be it will give the list items. But at first our test will show fail status due absence of list items.

// we can use findAllByRole() to get the list items as it will work asynchronously and will give the test result when it get the desired list/role. All find() queries will return a promise and the testing library of React renders multiple times until it get its response. it expects 3 parameters, the first parameter is the role, the second parameter is the exact boolean, and the third parameter is the timeout on which test should wait, after that it will fail is the response could not get from the server.

//     const listItems = await screen.findAllByRole('listitem');
//     expect(listItems).not.toHaveLength(0);
//   });
// });

// Since we cannot send HTTP requests to the server during the test, we need to create a fake request object that will send the request to the server and receive  the response from the server. We call it a MockHttpRequest.

describe('Async Component', () => {
  test('render async codes and check the response', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });
    render(<Async />);

    const listItemEle = await screen.findAllByRole('listitem');
    expect(listItemEle).not.toHaveLength(0);
  });
});
