import React, { Component } from 'react'
import { Route, Link, NavLink, Redirect, Prompt } from 'react-router-dom'

export default class Test extends Component {
  render () {
    return (
      <div>
        <Link to='/'>Home</Link>

        <Link to='/about-us'>About Us</Link>
        <Link to='/contacts'>Contacts</Link>


        <NavLink activeClassName='active' to='/'>Home</NavLink>
        <NavLink activeClassName='active' to='/about-us'>About Us</NavLink>
        <NavLink activeClassName='active' to='/contacts'>Contacts</NavLink>

        <NavLink activeClassName='active' to={{
          pathname: '/about-us',
          search: 'brandName',
          hash: '#the-hash',
          state: { fromDashboard: true }
        }}>About Us</NavLink>


        <Route path='/' component={Home} />

        <Route path='/about-us' component={AboutUs} />
        <Route path='/contacts' component={Contacts} />

        <Route path='*' render={(match) => {
          console.log('arguments', match)
          return (
            <div>Page not found</div>
          )
        }}/>


        <div className='contacts-links'>
          <Link to='/contacts/email'>Email</Link>
          <Link to='/contacts/phone'>Phone number</Link>
        </div>
        <div className='contacts-routes'>
          <Route path='/contacts/email' render={() => <div>kina@yopmail.com</div>}/>
          <Route path='/contacts/phone' render={() => <div>0939053169</div>} />
          <button onClick={() => this.props.history.push({pathname:'/about', state: {prevState: 'contacts'}})}>Go to about us</button>
        </div>


        <Route path='*' render={(match) => {
          console.log('arguments', match)
          if (match.location.pathname === '/about') {
            return (
              <Redirect to='/about-us'/>
            )
          }
          return (
            <div>Page not found</div>
          )
        }}/>

        <button onClick={() => this.props.history.push({pathname:'/about', state: {prevState: 'contacts'}})}>Go to about us</button>

        <Prompt message="Are you sure you want to leave?"/>

      </div>
    )
  }
}
