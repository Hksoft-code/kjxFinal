import axios from 'axios';
import React, {useState} from 'react'
import styled from 'styled-components';

const WorkDoneForm = () => {
    const [loading,setLoading] = useState(false)
    const [formData, setFormData] = useState({
      title:'',
      expirence:'',
      picture:null
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Process the selected file (e.g., validate type)

    if (selectedFile) {
        const allowedFileTypes = ['.png', '.jpeg', '.jpeg'];
        const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
        
        if (allowedFileTypes.includes(`.${fileExtension}`)) {
            setFormData({ ...formData, file: selectedFile });
        } else {
          alert('Invalid file type. Please select a png, jpeg, or jpeg file.');
        }
      }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    
    const { title, expirence,picture } = formData;

    if (title && expirence && picture ) {
        const data = new FormData();
        data.append("title", title);
        data.append("discription", expirence);
        data.append("work", picture);

        try {
            const response = await axios.post(`http://localhost:4567/api/v2/create-job`, data,{
              headers: {
                'Content-Type': `multipart/form-data`,
              }
            });
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false)
        }
    } else {
        console.log("Invalid form data. Check your inputs.");
    }
  }

  return (
    <FormContainer>
      <h2>Create Work Done</h2>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          Work Title:
          <FormInput type="text" required name='title' value={formData.title} onChange={handleInputChange} />
        </FormLabel>
        <FormLabel>
          Description:
          <FormTextArea type="text" required name='description' value={formData.expirence} onChange={handleInputChange} />
        </FormLabel>
        <FormLabel>
          <Input type="file" name="work" required accept="image/*" onChange={handleFileChange} />
        </FormLabel>
        <FormSubmitButton type="submit">{loading?"Submiting...":"Create Job Offer"}</FormSubmitButton>
      </form>
    </FormContainer>
  )
}

export default WorkDoneForm;

const Input = styled.input`
  background-color: #007bff;
  color: white;
  padding: 20px 30px;
  border: none;
  cursor: pointer;
`

const FormContainer = styled.div`
  width:80%;
  /* height: 600px; */
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  @media (min-width:766px){
    width:40%;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 90%;
  height:40px;
  border-radius:5px;
  outline:none;
  border:none;
  font-size:15px;
  background-color:transparent;
  color:#000;
  box-shadow:0px 0px 5px lightgray;
  padding-left: 10px;
  margin-top: 5px;
`;

const FormTextArea = styled.textarea`
  width: 90%;
  height: 200px;
  border-radius:5px;
  outline:none;
  border:none;
  font-size:15px;
  background-color:transparent;
  color:#000;
  box-shadow:0px 0px 5px lightgray;
  padding-left: 10px;
  margin-top: 5px;
  resize: vertical;
`;

const FormSubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 20px 30px;
  width: 100%;
  border: none;
  cursor: pointer;
`;