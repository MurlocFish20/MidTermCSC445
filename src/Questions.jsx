import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginField = () => {
  const cans1 = 'y'
  const cans2 = 'y'
  const cans3 = 'n'
  const [ans1, setAns1] = useState('')
  const [ans2, setAns2] = useState('')
  const [ans3, setAns3] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    if (!ans1 || !ans2 || !ans3) {
      setError('Please fill in all fields.');
      return;
    }
    
    if (ans1 == cans1) {
        if (ans2 == cans2){
            if (ans3 == cans3) {
                navigate('/welcome')
            } else {
                alert("You got question 3 wrong")
                setAns3('')
            }
        } else {
            alert("You got question 2 wrong")
            setAns2('')
        }
    } else {
        alert("You got question 1 wrong")
        setAns1('')
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Quiz Time!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Question 1: y/n Navigate can be used to route a user through a website 
            <input
              type="ans1"
              value={ans1}
              onChange={(e) => setAns1(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Question 2: y/n npm run dev allows you to actively see updates in you web app when you make updates
            <input
              type="ans2"
              value={ans2}
              onChange={(e) => setAns2(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Question 3: y/n UI/UX is used during back end development
            <input
              type="ans3"
              value={ans3}
              onChange={(e) => setAns3(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" onClick='handleSubmit'>Submit Answers</button>
      </form>
    </div>
  );
};

export default LoginField;