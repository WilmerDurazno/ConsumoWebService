package ec.edu.ups.p58.pm.p58pmdemows.services;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import ec.edu.ups.p58.pm.p58pmdemows.business.GestionContactos;
import ec.edu.ups.p58.pm.p58pmdemows.modelo.Contacto;

@Path("/contactos")
public class ContactosService {

	@Inject
	private GestionContactos on;
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Mensaje createContacto(Contacto contacto) {
		
		Mensaje m = new Mensaje();
		try {
			on.createContacto(contacto);
			m.setCodigo(1);
			m.setMensaje("OK");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			m.setCodigo(0);
			m.setMensaje("Error");
		}
		return m;
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Contacto> getContactos(){
		
		try {
			List<Contacto> listado = on.getContactos();
			return listado;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}
	
}
