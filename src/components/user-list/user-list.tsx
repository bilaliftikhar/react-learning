import React, { Component, ReactNode, ChangeEvent, Fragment } from 'react';
import { IUserListProps } from '../../interfaces';
import { StyledHeading } from './styled';
import { Loading } from '../loading';
import { Search } from '../search';
import { User } from '../user';

export class UserList extends Component<IUserListProps>  {
  componentDidMount () : void {
    this.props.fetchUsers();
  }
  searchHandler = (event : ChangeEvent<HTMLInputElement>) : void => {
    this.props.searchInput(event.target.value);
  }
  render () : ReactNode {
    const { users, fetching, sortUser } = this.props;
    return (
      <Fragment>
        <StyledHeading>GitHub Users</StyledHeading>
        <Search
          searcHandler={this.searchHandler}
          sortHandler={sortUser} />
        {fetching
          ? <Loading />
          : <User users={users} />
        }
      </Fragment>
    );
  }
}
