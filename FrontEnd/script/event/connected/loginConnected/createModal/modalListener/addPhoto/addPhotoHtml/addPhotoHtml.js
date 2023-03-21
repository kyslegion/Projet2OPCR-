export function addPhotoHtml() {
    let container = document.querySelector('#container');
    container.innerHTML = `
      <form id="form" style="display: flex;flex-direction: column;align-items: center;width: 630px;height: 670px;">
        <div id='containerBtnOptions'>
          <button type="button" onclick="precedent()"><img src="../../../../../../../../assets/icons/back-svgrepo-com 1.png"></button>
          <button type="button" onclick="close()"><img src="../../../../../../../../assets/icons/close-svgrepo-com 1.png"></button>
        </div>
        <h2>Ajout photo</h2>
  
        <div id="image-preview">
          <img id="preview" src="../../../../../../../../assets/icons/picture-svgrepo-com 1.png" style="width: 58px;height: 58px;">
          <label for="image">
            <div style="background: #CBD6DC;border-radius: 50px;">
              <span style="font-family: 'Work Sans';font-style: normal;font-weight: 500;font-size: 14px;line-height: 16px;text-align: center;color: #306685;padding-block: 10px;padding-inline: 30px;">
                +Ajouter photo
              </span>
            </div>
          </label>
          <input type="file" id="image-upload" name="image"  required>
          <span>jpg, png : 4mo max</span>
          <br><br>
        </div>
  
        <label for="titre">Titre:</label>
        <input type="text" id="title" name="title" required><br><br>
  
        <label for="categoryId">Catégorie:</label>
        <select id="category" name="category" required>
          <option value="" selected></option>
          <option value="1">Objets</option>
          <option value="2">Appartements</option>
          <option value="3">Hôtels & restaurants</option>
        </select><br><br>
  
        <input type="submit" value="Valider" required>
      </form>
    `;
  }
  