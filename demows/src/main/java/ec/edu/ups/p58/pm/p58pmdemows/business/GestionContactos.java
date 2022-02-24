package ec.edu.ups.p58.pm.p58pmdemows.business;

import java.util.List;
 
import javax.ejb.Stateless;
import javax.inject.Inject;

import ec.edu.ups.p58.pm.p58pmdemows.dao.ContadoDAO;
import ec.edu.ups.p58.pm.p58pmdemows.modelo.Contacto;

@Stateless 
public class GestionContactos {

	@Inject
	private ContadoDAO daoContacto;
	
	public void createContacto(Contacto contacto) throws Exception {
		// reglas o validaciones previas a guardar
		
		if(daoContacto.read(contacto.getCodigo())!=null)
			daoContacto.update(contacto);
		else
			daoContacto.create(contacto);
		
	}
	
	public List<Contacto> getContactos() throws Exception{
		return daoContacto.getList();
	}
	
}
