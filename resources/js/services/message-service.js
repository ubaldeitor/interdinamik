import axios from 'axios';
class MessageService{

    saveMessage(payload){
        axios.post('/api/message', {payload}, 
        {headers:{
          'Content-Type': 'application/json' 
        }})
        .then(res => {
            console.log(res);
          })
          .then(
            (result) => {
              this.setState({
                messageSaved: true
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                messageSaved: false,
                error
              });
            }
          )
    }
}

export default MessageService;