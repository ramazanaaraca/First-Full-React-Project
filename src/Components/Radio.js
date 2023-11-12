import classNames from "classnames"
import { useField , ErrorMessage } from "formik"


function Radio ({label, options, ...props}) {
  options = [
    {key: '1', value: 'Mr'},
    {key: '2', value: 'Mrs'},
    {key: '3', value: 'Other'}
  ]
	const [field, meta, helpers] = useField(props)
	const clickHandle = value => {
		helpers.setValue(value)
	}
	return <div className="flex items-center gap-10">
		{options.map((option, key) => (
			<label key={key} onClick={() => clickHandle(option.key)} className="flex items-center gap-3">
				<span className={classNames (
          {
            "p-1 border-[5px] transition-all " : true,
            "border-[#E43D30]" : field.value === option.key
          }
        )} style={{display: 'block', width: 20, height: 20, borderRadius: '50%', 
        backgroundColor: field.value === option.key ? 'white ' : '#eee'}}
        />
				{option.value}
			</label>
		))}
    
	</div>
}

export default Radio