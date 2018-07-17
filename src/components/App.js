import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {menuAdmin} from '../dataMenu';
import MenuList from './MenuList';
import SendButton from './SendButton';

class App extends Component {
    render() {
        return (
          <div style={{height: "100vh"}}>
            <Grid container spacing={0} style={{height: "100%"}}>
                {menuAdmin.map(item=>{
                    return <Grid key={item.id} item xs={12} sm={6} style={{height: "50%"}}>
                                <Grid container spacing={0} justify="center" alignItems="center" style={{height: "100%"}}>
                                    <Grid item xs={8} style={{height: "80%"}}><Paper style={{height: "100%"}}><MenuList item={item} /></Paper></Grid>
                                </Grid>
                            </Grid>
                })}
            </Grid>
              <SendButton/>
          </div>
        );
  }
}

export default App;
