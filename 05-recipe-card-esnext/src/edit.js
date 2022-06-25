/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';
 import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
 import { Button } from '@wordpress/components';
 
 const Edit = ( props ) => {
	 const {
		 attributes: { title, mediaID, mediaURL, ingredients, instructions},
		 setAttributes,
	 } = props;
 
	 const blockProps = useBlockProps();
 
	 const onChangeTitle = ( value ) => {
		 setAttributes( { title: value } );
	 };
 
	 const onSelectImage = ( media ) => {
		 setAttributes( {
			 mediaURL: media.url,
			 mediaID: media.id,
		 } );
	 };
	 const onChangeIngredients = ( value ) => {
		 setAttributes( { ingredients: value } );
		 console.log(getFoodNutrition(value));
	 };
 
	 const onChangeInstructions = ( value ) => {
		 setAttributes( { instructions: value } );
	 };
 
	 function getFoodNutrition(value) {
		 const initials = {
		 calories: 0,
		 carbs: 0,
		 fat: 0,
		 
		 }
		 const caloriesData = {
		 egg: {calories: 105, carbs: 42, fat:1},
		 milk: {calories: 52, carbs: 33, fat:4},
		 butter: {calories: 237, carbs: 2, fat:21},
		 flour: {calories: 34, carbs: 83, fat:6},
		 cream: {calories: 223, carbs: 3, fat:44}
		 }
		 // Convert list string value to array
		 value = value.replace('<li>','').split('</li>');
		 value = value.map(elem => elem.replace("<li>", ""));
		 //console.log({value});
		 // Loop over the caloriesData keys
		 const {calories, carbs, fat} = Object.keys(caloriesData)
		 // filter keys that are in the value (entries)
		 .filter(key => value.indexOf(key) > -1)
		 
		 // Calculate sum of calories, carbs, fat
		 .reduce((previousValue, key, currentIndex, array) => {
			 console.log(array);
			 return {
				 calories: previousValue.calories + caloriesData[key].calories,
				 carbs: previousValue.carbs + caloriesData[key].carbs,
				 fat: previousValue.fat + caloriesData[key].fat
			 }
		 }, initials);
		 
 
		 return `Calories: ${calories}kcal - Carbs: ${carbs}gr - Fat: ${fat}gr`;
	 };
 
	 return (
		 <div { ...blockProps }>
			 <RichText
				 tagName="h1"
				 placeholder={ __(
					 'Write Recipe title…',
					 'gutenberg-examples'
				 ) }
				 value={ title }
				 onChange={ onChangeTitle }
			 />
			 
			 <div className="recipe-image">
				 <MediaUpload
					 onSelect={ onSelectImage }
					 allowedTypes="image"
					 value={ mediaID }
					 render={ ( { open } ) => (
						 <Button
							 className={
								 mediaID ? 'image-button' : 'button button-large'
							 }
							 onClick={ open }
						 >
							 { ! mediaID ? (
								 __( 'Upload Image', 'gutenberg-examples' )
							 ) : (
								 <img
									 src={ mediaURL }
									 alt={ __(
										 'Upload Recipe Image',
										 'gutenberg-examples'
									 ) }
								 />
							 ) }
						 </Button>
					 ) }
				 />
			 </div>
 
			 <div className="post-recipe">
				 <div className="recipe-ingredients">
					 <h3>{ __( 'Ingredients', 'gutenberg-examples' ) }</h3>
					 <RichText
						 tagName="ul"
						 multiline="li"
						 placeholder={ __(
							 'Write a list of ingredients…',
							 'gutenberg-examples'
						 ) }
						 value={ ingredients }
						 onChange={ onChangeIngredients }
						 className="ingredients"
					 />
				 </div>
 
				 <div className="recipe-instruction">
					 <h3>{ __( 'Instructions', 'gutenberg-examples' ) }</h3>
					 <RichText
						 tagName="ol"
						 multiline="li" 
						 className="steps"
						 placeholder={ __(
							 'Write the instructions. Indent between each step to make an ordered list.',
							 'gutenberg-examples'
						 ) }
						 value={ instructions }
						 onChange={ onChangeInstructions }
					 />
				 </div>
			 </div>
 
		 </div>
	 );
 
	 
 };
 
 export default Edit;
 