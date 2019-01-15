import { connect } from 'react-redux';
import Messages from '../components/Messages';

const mapStateToProps = (state) => ({
    messages: state.messages,
});

const mapDispatchToProps = {};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;