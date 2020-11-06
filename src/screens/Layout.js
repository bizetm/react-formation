import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import RuleList from './RuleList';
import RuleForm from './RuleForm';

function Layout() {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="container">
                    <Route exact path="/" component={RuleList} />
                    <Route exact path="/new" component={RuleForm} />
                    <Route path="/edit/:id" component={RuleForm} />
                </div>
            </div>
        </div>
    )
}

export default Layout;