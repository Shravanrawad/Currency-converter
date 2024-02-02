<script>
      document.addEventListener('DOMContentLoaded', function(){

        document.getElementById('submit').disabled = true;
        document.getElementById('input').onkeyup =  function(){
            if (document.getElementById('input').value.length > 0){
                document.getElementById('submit').disabled = false;
            }
        }

        document.querySelector('form').onsubmit = function(){
            fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JgJPD7Q5c5EXxqzrFoOt5r0TTeJAA4bFwL6wuMCv')
            .then(response => response.json())
            .then(data => {

                let input  = document.getElementById('input').value;
                let rate  = data.data[input];
                if (rate !== undefined){
                    document.getElementById('result').innerHTML = `1 USD is Equal to ${rate} ${input}`
                }
                else {
                    document.getElementById('result').innerHTML = 'Invalid Currency';
                }

                document.getElementById('input').value = '';

            })
            return false;
        }
      })
    </script>
